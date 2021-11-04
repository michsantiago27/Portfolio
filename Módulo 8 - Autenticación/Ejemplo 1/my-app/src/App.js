/**
 * 1. Paquetes que hay que instalar (npm)
 * 2. Configuraciones externas (Ej. Firebase)
 * 3. Imports. Librerías, componentes y hooks
 * 4. Configuraciones internas y uso de funcionalidades principales
 * 5. Información útil
 */


import logo from './logo.svg';
import './App.css';
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
const appFirebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  // Uso del hook de firebase
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <div className="App">
      <button onClick={() => {
          signInWithPopup(auth, provider);
          console.log(user);
        }}>
        Login con firebase
      </button>
    </div>
  );
}

export default App;
