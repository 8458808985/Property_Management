import * as Yup from 'Yup';
export const validationSchema = Yup.object({
  propertyOwner: Yup.string().min(2).required("Property Owner is required"),
  propertyName: Yup.string().min(2).required("Property Name is required"),
  numberofUnits: Yup.string().required("Number of Units is required"),
  contactNumber: Yup.string().min(10).required("Contact Number is required"),
  propertyDescription: Yup.string().required("Property Description is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  address: Yup.string().required("Address is required"),
  unitName: Yup.string().required("Unit Name is required"),
  squareFeet: Yup.string().required("Square Feet is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.string().required("Price is required"),
  propertyType: Yup.string().required("Property Type is required"),
 
});