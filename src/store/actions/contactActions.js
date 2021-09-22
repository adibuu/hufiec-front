import { contactActions } from "../slices/contactSlice";
import { uiActions } from "../slices/uiSlice";
import { contactEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchContact = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const contactData = await fetchData(contactEndpoints.get);
      dispatch(
        contactActions.setContact({
          address: {
            city: contactData[0].address.city,
            street: contactData[0].address.street,
            postCode: contactData[0].address.postCode,
          },
          email: contactData[0].email,
          phone: contactData[0].phone,
          facebookURL: contactData[0].facebookURL,
          instagramURL: contactData[0].instagramURL,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
