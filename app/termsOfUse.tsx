import React from 'react';
import Head from 'next/head';

const TermsOfUse: React.FC = () => {
    return (
        <>
            <Head>
                <title>Términos de Uso</title>
                <meta name="description" content="Políticas y términos de uso de la aplicación." />
            </Head>
            <div>
                <h1>Políticas y Términos de Uso</h1>
                <h2>1. Introducción</h2>
                <p>Bienvenido a RCF. Esta página describe nuestras políticas y términos de uso.</p>

                <h2>2. Información que recopilamos</h2>
                <p>Recopilamos información sobre su ubicación y acceso a la cámara para mejorar su experiencia.</p>

                <h2>3. Uso de la cámara</h2>
                <p>La cámara se utiliza para obtener una foto de perfil del usuario. Se requiere su consentimiento para acceder a esta función.</p>

                <h2>4. Uso de la ubicación</h2>
                <p>Utilizamos su ubicación para obtener la dirección de su domicilio y recomendarle canchas de fútbol cerca de su ubicación. Puede optar por no compartir su ubicación.</p>

                <h2>5. Compartición de información</h2>
                <p>No compartimos su información personal con terceros, excepto para cumplir con la ley.</p>

                <h2>6. Seguridad de la información</h2>
                <p>Implementamos medidas de seguridad para proteger su información.</p>

                <h2>7. Derechos del usuario</h2>
                <p>Usted tiene derecho a acceder, corregir o eliminar su información personal.</p>

                <h2>8. Cambios en las políticas</h2>
                <p>Cualquier cambio en nuestras políticas será notificado a través de la aplicación.</p>

                <h2>9. Contacto</h2>
                <p>Para preguntas, contáctenos en serato.arieli@gmail.com</p>
            </div>
        </>
    );
};

export default TermsOfUse;
