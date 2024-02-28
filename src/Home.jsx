import data from "./textos.json";

export default function Home() {
  const {menu} = data;

  return (
    <section className='hero'>
      <img className='logo_inicio' src={menu.img.src} alt={menu.img.alt} />
    </section>
  );
}
