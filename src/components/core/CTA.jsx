import { MyButton } from "../common/MyButton";

const Cta = () => {
  return (
    <div className="flex gap-4 sm:-mt-2 md:mt-0">
      <MyButton
        color="monoButtonGreen"
        className="text-sm break-words md:text-[16px] w-full p-8"
        aria-label="Tagline"
      >
        Building things that matter. <br />Probably deploying at 2AM. <br className="md:hidden" /> Chasing the Alignment 🌱
      </MyButton>
    </div>
  );
};

export default Cta;
