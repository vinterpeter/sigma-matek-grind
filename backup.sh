#!/bin/bash
# Sigma Matek Grind - Backup & Deploy Script
# Usage: ./backup.sh [push]
# Without args: backup only
# With "push": backup + commit + push

BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🪙 Sigma Matek Grind - Backup & Deploy"
echo "========================================"

# 1. Create backup directory
mkdir -p "$PROJECT_DIR/$BACKUP_DIR"
echo "📁 Backup mappa: $BACKUP_DIR"

# 2. Backup Firebase Firestore data (if firebase CLI available)
if command -v npx &> /dev/null; then
    echo "☁️  Firebase backup..."
    node -e "
const https = require('https');
const fs = require('fs');
const projectId = 'sigma-matek-grind';
const url = 'https://firestore.googleapis.com/v1/projects/' + projectId + '/databases/(default)/documents/users?pageSize=100';
https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('$PROJECT_DIR/$BACKUP_DIR/firestore_backup.json', data);
        try {
            const parsed = JSON.parse(data);
            const count = parsed.documents ? parsed.documents.length : 0;
            console.log('  ✅ ' + count + ' felhasználó mentve');
        } catch(e) {
            console.log('  ⚠️  Firestore válasz mentve (nem JSON vagy üres)');
        }
    });
}).on('error', (e) => {
    console.log('  ⚠️  Firebase nem elérhető: ' + e.message);
    fs.writeFileSync('$PROJECT_DIR/$BACKUP_DIR/firestore_backup.json', JSON.stringify({error: e.message}));
});
" 2>/dev/null
    sleep 2
else
    echo "⚠️  Node.js nem elérhető, Firebase backup kihagyva"
fi

# 3. Backup source files
echo "📋 Forrásfájlok mentése..."
cp "$PROJECT_DIR/index.html" "$PROJECT_DIR/$BACKUP_DIR/index.html"
cp "$PROJECT_DIR/cards_classic.js" "$PROJECT_DIR/$BACKUP_DIR/cards_classic.js"
cp "$PROJECT_DIR/cards_italian.js" "$PROJECT_DIR/$BACKUP_DIR/cards_italian.js"
cp "$PROJECT_DIR/creator_data.js" "$PROJECT_DIR/$BACKUP_DIR/creator_data.js"
echo "  ✅ 4 forrásfájl mentve"

# 4. Save current git state
echo "📝 Git állapot mentése..."
git -C "$PROJECT_DIR" log --oneline -5 > "$PROJECT_DIR/$BACKUP_DIR/git_log.txt"
git -C "$PROJECT_DIR" diff HEAD > "$PROJECT_DIR/$BACKUP_DIR/uncommitted_changes.patch" 2>/dev/null
echo "  ✅ Git log és diff mentve"

# 5. Create restore script
cat > "$PROJECT_DIR/$BACKUP_DIR/restore.sh" << 'RESTORE'
#!/bin/bash
echo "🔄 Visszaállítás ebből a backupból..."
DIR="$(cd "$(dirname "$0")" && pwd)"
PARENT="$(dirname "$DIR")"
PARENT="$(dirname "$PARENT")"
cp "$DIR/index.html" "$PARENT/index.html"
cp "$DIR/cards_classic.js" "$PARENT/cards_classic.js"
cp "$DIR/cards_italian.js" "$PARENT/cards_italian.js"
cp "$DIR/creator_data.js" "$PARENT/creator_data.js"
echo "✅ Forrásfájlok visszaállítva!"
echo "⚠️  Firebase adatok kézi visszaállítást igényelnek a firestore_backup.json-ből"
RESTORE
chmod +x "$PROJECT_DIR/$BACKUP_DIR/restore.sh"

echo ""
echo "✅ Backup kész: $BACKUP_DIR"
echo ""

# 6. Deploy if requested
if [ "$1" = "push" ]; then
    echo "🚀 Deploy indítása..."
    cd "$PROJECT_DIR"
    git add -A
    git status --short
    echo ""
    read -p "Commit üzenet: " MSG
    if [ -z "$MSG" ]; then
        MSG="Update $(date +%Y-%m-%d)"
    fi
    git commit -m "$MSG

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
    git push origin main
    echo "✅ Deploy kész!"
else
    echo "💡 Deploy-hoz futtasd: ./backup.sh push"
fi
