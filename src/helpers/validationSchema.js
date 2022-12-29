import * as Yup from 'yup';

const validationSchema =()=>{
   return Yup.object({
        search: Yup.string()
        .min(3, 'Too Short!')
        .required('Required!')
      })
}

export default validationSchema;