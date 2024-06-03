import { GoogleOAuthProvider } from '@react-oauth/google';
import './Register.css';
import Loginsesion from './Loginsesion'; 

export default function Iniciogoogle() {
  return (
    <GoogleOAuthProvider clientId="567858506235-la5dh2n100tn8hovkis4vtbd1fikv0td.apps.googleusercontent.com">
      <main>
        <div>
          <h1>Google</h1>
        </div>
        <Loginsesion />
      </main>
    </GoogleOAuthProvider>
  );
}
