import img from '../assets/img.png';

const Courasol = () => {
  return (
    <div>
      <div className="max-w-96 rounded overflow-hidden border border-[#050505]/30 flex items-center gap-4">
        <img className="rounded" src={img} />
        <img className="rounded" src={img} />
      </div>
    </div>
  );
};

export default Courasol;
