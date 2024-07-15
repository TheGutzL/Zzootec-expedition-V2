import { Button } from "@/components/ui/button";
import { TimerIcon } from "lucide-react";

function Location() {
  return (
    <div>
      <div>
        <div>Ubícanos</div>
        <div>
          <p>Encuentra nuestra ubicación en el mapa a continuación.</p>
        </div>
        <div>
          <TimerIcon> </TimerIcon>
          <p>Horario de Atencion</p>
        </div>
        <div>Peru-Ica, Av Ayabaca 777, Zzootec.Ica</div>
        <div>L-S 7:00 am a 9:00 pm | Dom 8:00 am a 8:00 pm</div>{" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.1835803061936!2d-75.72839269116074!3d-14.070292374676631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3e947ae07b5%3A0xeb1efbf00881df9a!2sZzootec!5e0!3m2!1ses-419!2spe!4v1719795325266!5m2!1ses-419!2spe"
          width="100%"
          height="450"
        />
      </div>
      <div className="flex justify-center items-center my-12 ">
        <Button>
          <p>VISUALIZANOS EN GOOGLE MAPS</p>
        </Button>
      </div>
    </div>
  );
}

export default Location;
