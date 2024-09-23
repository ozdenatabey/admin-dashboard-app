import Accordion from "../components/Accordion";

function Faq() {
  return (
    <>
      <div className="mt-8 space-y-3 w-3/5 m-auto">
        <Accordion
          question="Question 1"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
        <Accordion
          question="Question 2"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
        <Accordion
          question="Question 3"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
        <Accordion
          question="Question 4"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
        <Accordion
          question="Question 5"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
        <Accordion
          question="Question 6"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae quia distinctio nostrum aut consectetur eligendi corporis cum, inventore incidunt?"
        />
      </div>
    </>
  );
}

export default Faq;
