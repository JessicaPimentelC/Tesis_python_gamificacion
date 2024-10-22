import "../styles/1.css"; // Asegúrate de que la ruta sea correcta

const Mapa = () => {
    const positions = [
        { top: 50, left: 50, icon: "colombia.png" }, // Posición 1
        { top: 50, left: 100, icon: "cohetee.png" }, // Posición 2
        { top: 50, left: 150, icon: "empresario.png" }, // Posición 3
        { top: 50, left: 200, icon: "tres.png" }, // Posición 4
        { top: 100, left: 50, icon: "libero.png" }, // Posición 5
        { top: 150, left: 50, icon: "ed.png" }, // Posición 6
        { top: 200, left: 50, icon: "geometrico.png" }, // Posición 7
        { top: 200, left: 100, icon: "41.png" }, // Posición 8
        { top: 200, left: 150, icon: "42.png" }, // Posición 9
        { top: 200, left: 200, icon: "43.png" }, // Posición 10
        { top: 250, left: 200, icon: "44.png" }, // Posición 11
        { top: 300, left: 200, icon: "45.png" }, // Posición 12
        { top: 350, left: 200, icon: "46.png" }, // Posición 13
        ];
    return (
    <div className="circles-container-mapa" style={{textAlign: "center"}}>
        {positions.map((pos, index) => (
        <div
            key={index}
            className="circle"
            style={{
            position: "absolute",
            top: `${pos.top}px`,
            left: `${pos.left}px`,
        }}
        >
        <img src={pos.icon} alt={`Icon ${index}`} />{" "}
        {/* Icono individual para cada círculo */}
        </div>
    ))}
    </div>
);
};

export default Mapa;
