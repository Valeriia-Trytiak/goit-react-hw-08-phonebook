import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader';
import { ColorRing } from 'react-loader-spinner';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

export default function Register() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}
      {error && <span>Whoops... Error! Please, reload this page!</span>}
    </div>
  );
}
