import React from 'react';
import Profile from '../Components/Profile'
import TitleAndDescription from '../Components/TitleAndDescription';
import DownloadButton from '../Components/DownloadButton';
import ListWithTitle from '../Components/ListWithTitle';
import profileImage from '../assets/emmlg.jpg';
import DownloadCV from '../assets/Curriculum CV JavaDev_Emmlg.pdf';


const PIndex: React.FC = () => {
  return (
    <>

      {/* Página Principal */}
      <main className="container my-5">
        <div className="row">
          {/* Aside Izquierdo */}
          <aside className="col-md-4 text-center">
            <Profile
              imageSrc={profileImage}
              name="Emmanuel López"
              profession="Desarrollador Backend"
              githubLink="https://github.com/Emmlg"
              linkedinLink="https://www.linkedin.com/in/emmanuel-lopezg"
            />
          </aside>

          {/* Contenido Principal */}
          <div className="col-md-8">
            <TitleAndDescription
              title="Acerca de Mí"
              description="Soy una persona proactiva, organizada y responsable, con un gran entusiasmo por aprender cosas nuevas y enfrentar desafíos. Mi objetivo es encontrar un puesto que me permita utilizar mis habilidades recién adquiridas y seguir desarrollándome profesionalmente."
            />
            <DownloadButton
              title="Descargar CV"
              filePath={DownloadCV}
            />
            <div className="row">
              <ListWithTitle
                title="Intereses"
                list={["Creación de API Rest", "Computación en la nube", "E-Commerce"]}
              />
              <ListWithTitle
                title="Educación"
                list={[
                  "Licenciatura en Computación (Actualmente)",
                  "Certificación en Oracle Next Education",
                  "Certificación en Excel",
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PIndex;
