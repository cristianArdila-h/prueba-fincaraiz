import React, { FunctionComponent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sentContactData } from '../../actions/sentFormContact';
import "./contactUs.scss";
import Swal from "sweetalert2";

type BuilderProps = {
  builder: {
    icon: string;
    name: string;
    title: string;
  }
}

interface formValues {
  InputName: string;
  InputEmail: string;
  InputPhone: string;
  InputCyty: string;
  InputComment: string;
}

const LIST_INDICATIVES = ['601', '604'];

export const ContactUsForm: FunctionComponent<BuilderProps> = (builderProps: BuilderProps) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const contactUsState = useSelector((defState) => defState.contactUs);
  const { isLoading, result } = contactUsState;
  const { register, handleSubmit } = useForm();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [contactState, setFormState] = useState<formValues>({
    InputName: '',
    InputEmail: '',
    InputPhone: '',
    InputCyty: '',
    InputComment: ''
  });

  const { InputName, InputEmail, InputPhone, InputCyty, InputComment } = contactState;

  const handleInputChange = (event: any) => {
    setFormState({
      ...contactState,
      [event.target.name]: event.target.value
    })
  };

  useEffect(() => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (InputEmail != '') {
      emailRegex.test(InputEmail) ? setIsValidEmail(true) : setIsValidEmail(false);
    }
  }, [InputEmail]);

  useEffect(() => {
    const indicative = InputPhone.substring(0, 3) ? InputPhone.substring(0, 3) : InputPhone;
    InputPhone != '' ? setIsValidPhone(LIST_INDICATIVES.includes(indicative)) : setIsValidPhone(true);
  }, [InputPhone]);

  useEffect(() => {

    if (result.status === 'ok') {
      Swal.fire({
        icon: 'success',
        title: 'Genial!!',
        text: `${result.message}`
      })
    }
  }, [result]);
  useEffect(() => {
    if (isLoading) {
      Swal.showLoading()
    }
  }, [isLoading]);
  const onSubmit = (data: any) => {
    dispatch(sentContactData());
  }


  return (

    <div className='container-contact-form'>
      <div className='builder'>
        <div className='builder__img'>
          <img src={builderProps.builder.icon} alt="" />
        </div>
        <div className='builder__title'>
          <span>{builderProps.builder.title}</span>
        </div>
      </div>
      <div className='container-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input
              type="text"
              name="InputName"
              className="input-field"
              value={InputName}
              onChange={handleInputChange}
              required
            />
            <label className="input-label">*Nombre</label>
          </div>
          <div className="input">
            <input
              type="text"
              name="InputEmail"
              className="input-field"
              value={InputEmail}
              onChange={handleInputChange}
              required
            />
            <label className="input-label">*Email / Correo Electrónico</label>
          </div>
          {isValidEmail ? null : <label className="input-error ">Email no valido</label>}
          <div className="input">
            <input
              type="number"
              className="input-field"
              name="InputPhone"
              value={InputPhone}
              onChange={handleInputChange}
              required />
            <label className="input-label">*Telefono / Celular</label>
          </div>
          {isValidPhone ? null : <label className="input-error ">Email no valido</label>}
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="InputCyty"
              value={InputCyty}
              onChange={handleInputChange}
              required />
            <label className="input-label">*Ciuldad</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              name="InputComment"
              value={InputComment}
              onChange={handleInputChange}
              required />
            <label className="input-label">*Comentario</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              <span className="small">* Autorizo a  AMARILO a que me envíe Información. </span>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              <span className="small">* Acepto Política de <a href="https://www.fincaraiz.com.co/politica_tratamiento_de_datos_personales.aspx?_ga=2.45082279.2068754420.1653922447-840663099.1653922447" title="Ver tratamiento de datos" target="_blank">tratamiento de datos</a> y <a href="https://www.fincaraiz.com.co/terminos_y_condiciones.aspx" title="Ver términos y condiciones" target="_blank">términos y condiciones</a></span>
            </label>
          </div>
          <input type="submit" value="Submit" className='btn-submit btn btn-success btn-block' />
        </form>
      </div>
    </div>

  );
}
