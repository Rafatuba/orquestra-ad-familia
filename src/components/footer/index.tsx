import "./footer-styles.css";

const ano = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer-container">
      <h4>
        <span>©</span> {ano} Orquestra AD Família
      </h4>
      <div className="igreja">
        <p>Assembleia de Deus Ministério da Família</p>
        <p>Endereço: Avenida Júlio de Castilho, 643</p>
        <p>Vila Alba - Campo Grande-MS</p>
      </div>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29906.859681242004!2d-54.66357760966178!3d-20.45050637538684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e778033b5541%3A0x4c073cced4a9ae1c!2sAssembleia%20de%20Deus%20Minist%C3%A9rio%20da%20Fam%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1737824504312!5m2!1spt-BR!2sbr"
          width="100%"
          height="180"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>Desenvolvido por Rafael Silva</p>
    </div>
  );
}
