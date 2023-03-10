import admin from "firebase-admin"
import serviceAccount from "path/to/serviceAccountKey.json"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'your-bucket-name.appspot.com'
});

const storage = admin.storage();

module.exports = { storage };
