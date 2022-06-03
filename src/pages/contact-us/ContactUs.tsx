import { FunctionComponent, useEffect } from "react";
import { ContactUsForm } from "../../components/contact/ContactUsForm";
import "./contactUsStyles.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from "../../actions/getProjectActin";
import { CarouselProyect } from "../../components/carousel/Carousel-proyect";

const ContactUs: FunctionComponent = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const state = useSelector((defState) => defState.project);
  const { isLoading, result } = state;
  // Effects
  useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <div className="concatct-container">
      {isLoading === true ?
        null :
        <>
          <CarouselProyect slide={result.images} />
          <ContactUsForm builder={{ ...result.builder, title: result.title }} />
        </>

      }


    </div>

  );
};

export default ContactUs;