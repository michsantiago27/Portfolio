/********** CONFIG FIREBASE ***********/
// https://firebase.google.com/docs/admin/setup
const admin = require("firebase-admin");

// Las credenciales salen de la consola de Firebase > Configuración del proyecto > Cuentas de servicio > Generar nueva clave privada
// Agregar .replace(/\\n/g, "\n") al final de la private_key
const firebaseCredentials = {
    type: "service_account",
    project_id: "autenticacion-ejercicio",
    private_key_id: "715166bd9c3e4d18952a6e878ff5b567362aff7f",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtQmY10jw3O/p4\ngqV5leNr1OZhLtTxvGPbSOtNoMC9cXm3iFYoglJiAVofSvo/ZtZP4+r3cpmjOMrk\ni6Nh8vPEjfcLoLhBRjNo2K9zxNL463UfwFONBY9/um3NLZNwDzVxKdi7VV+PVmIt\nrYCPzRPIJdXR2POErxTSXAZLNJcbwtJkyXJzgjscSASa30fVRhTiP9QDMkYfrK20\nY8y7qm3ejMDoaPypGt8aO+54wY5Uhp2KZfPDa2uWpdRJEnK4LYOU2dJFmTVx+fs8\nv7pjSK9hueli57bXk3GVff8v0J0cyBZ8Fq9aTsyj3dj9KJWfZR/S4BgFuwPJJ0rZ\nCOcAzCAZAgMBAAECggEAIo7r9DBK8nl0LDVi7C2JfyioCxpcPxtkj4ir5n/58c+A\nh6saBFp6NDIw160M3TiV5rl/VHv3SSc60PtJS3A6TypB7H/SQLLP7knKNT09F4lf\ng0XJZIeHZ+K3pAVDM0bVUg0Wvcb5mI2SZ6oDyqsNFw705zZu3DhP3uWcG8QRn+eX\nrHpqvHnU5xwOMTVJKkNWzQOxNkPRSXkxiNuAkeqffeu107wZyZ6bwnwJqo+CT3SK\nwaB93wPmP65wSb2Ptydhw3fhBSMg1KorXiKPisBBmKxn/NKIc+Dp1gz30rMTFmbl\n1n1Z0jJWpHjFy6MW/xMbV/ToEEDKPyKq4oE+8zxhAQKBgQDqyGckdol5fOTsdbO9\n2BWqoX3ICofZ2zHMvQYBxxEGtEK1TsFqgzlbYjvMaZq1ns5pewcsXHF8zydccuPI\nX/NFKPm6k/DigtoL14mkwME77MoKXCfAKREL4zZlL4MxEwZnW9ggHLkj5PURrfUQ\naP/hamnogJHV5JQYhkWXlE95lQKBgQC86q2tvFV6ecRwj6NYfWoMjpMUjMcaOZ8C\nxFmI5BYV16k6TIjpdU4jgGLpNxRrr/H4t7pI0mryJ+lRcuUoh2cwvDcdFEdictN6\nq3C5kKwu+TTLGuk4q9G3p85hSvpF8C4sg4LcpRAAqUzYxSgwQSohrWRTI9oC92+X\nvqDQbsWTdQKBgGSn8FhYnY3BNuANgjbU6k0SGTvnD+EdsVcGfwnKD4mhRKw4jIGe\nqrt7/QkhCVvuLq5YOXYSV/FbWpOvCesA/+nZrF8KSA7EbLkA+hjxLqcDWIdihQRE\nVvOSwOJWoVcrweYUIS97QQCbi1m+C7+yVGmO1sMARAXAjqGJB1L6GayVAoGBAJez\nEzgZrcIlmZqRnSdnvgrLSkwMJ61la8x7AzKrhRiRDvEjmCVv7wkPBV4kvp8ir/l6\n/3mOjhZZ+j9PNbjv0esOmGsfZ5skfbFZjbFU/Q7TSpN1zqWVQ1hoxY7W+FXE4i8Y\ng7LOUSVWzcCbwQPOsBhO9erVNTGAo/mEN/pnmPwpAoGBALyoeTfXAi1v3DgajD8/\nHCpo3sNSmFlgKrsucjo/P6OGFysYUa4+ysgktL/Z0DARFBu2FuDfo5/rOUX21Cne\n9mKBDPWpMhGBn2QD67Tm2tiJTMasPijrgpgVL9KV5fRke1G7HvUNnc8xxZVKdjIj\nvFL5jh+Z8sTIqeYWUoHVZYKr\n-----END PRIVATE KEY-----\n"
    .replace(/\\n/g, "\n"),
    client_email: "firebase-adminsdk-h2ocr@autenticacion-ejercicio.iam.gserviceaccount.com",
    client_id: "110748592974356792457",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h2ocr%40autenticacion-ejercicio.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(firebaseCredentials),
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
})


module.exports = admin;