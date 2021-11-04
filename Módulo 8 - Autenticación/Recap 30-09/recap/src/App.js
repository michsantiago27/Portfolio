// Importar estilos
import './App.css';

// Importar librerías de hooks de react
import { useState, useEffect } from "react";

// Importar firebase y hooks de firebase
import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Info extraída de firebase manualmente
const firebaseConfig = {
  apiKey: "AIzaSyDW923rHeKhzD9Pogb2cNrZMrhoftUEkiE",
  authDomain: "autenticacion-ejercicio.firebaseapp.com",
  projectId: "autenticacion-ejercicio",
  storageBucket: "autenticacion-ejercicio.appspot.com",
  messagingSenderId: "367143707426",
  appId: "1:367143707426:web:9e5c26ba8c3d6cb538fb7b",
  measurementId: "G-PXBTF58CLN"
};

// Inicializar firebase y su autenticación
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  // Uso del hook de firebase
  const [user, loading, error] = useAuthState(auth);
  const accessToken = user && user.accessToken;
  // Hook para actualizar productos
  const [products, setProducts] = useState([]);

  useEffect (() => {
    fetch( "URL" , { headers: { authorization: 'Bearer ${accesToken}' }})
    .then((data) => data.json())
    .then((data) => setProducts(data))
    .catch((error) => {
      console.log('Se encontró el siguiente error: ' + error)
    })
  }, [accessToken]);

  return (
    <div className="App">
      <button onClick={() => {
        signInWithPopup(auth, provider);
        console.log(auth.currentUser.getIdToken());  // Hubo que cambiar esto por un error: https://stackoverflow.com/questions/38335127/firebase-auth-id-token-has-incorrect-aud-claim
        }}>
        Login con firebase
      </button>
    </div>
  );
}
   
export default App;
