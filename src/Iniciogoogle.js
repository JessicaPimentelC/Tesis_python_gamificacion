import { GoogleOAuthProvider } from '@react-oauth/google';
import './Register.css';
import Loginsesion from './Loginsesion'; 

export default function Iniciogoogle() {
  return (
    <GoogleOAuthProvider clientId="567858506235-sd9fvbkheo3rnggdfpmnfjp63t6rgej3.apps.googleusercontent.com">
      <main>
        <div>
          <h1>Google</h1>
        </div>
        <Loginsesion />
      </main>
    </GoogleOAuthProvider>
  );
}