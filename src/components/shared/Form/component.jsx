import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

import validationSchema from '../../../helpers/validationSchema';

import './styles.scss';

const Form=()=>{
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema,
    onSubmit: ({search}, {resetForm}) => {
      navigate(`/search/:${search}`);
      resetForm({values:''}) 
    },
  });

  let navigate = useNavigate();

    return (
        <form onSubmit={formik.handleSubmit} className="form">
          <input
            id="search"
            name="search"
            type="text"
            placeholder='Search movie...'
            className="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
          />

          {
            formik.touched.search && formik.errors.search ? 
            ( <div className='form__required'>{formik.errors.search}</div>) : null
          }
          <button type="submit" className='form__submit'>Submit</button>
      </form>
    )
}

export default Form;
