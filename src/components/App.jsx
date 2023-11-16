// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Container } from './Container/Container.styled';
// import { ContainerLoader } from './ContainerLoader/ContainerLoader';
// import { ColorRing } from 'react-loader-spinner';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && (
//         <ContainerLoader>
//           <ColorRing
//             visible={true}
//             height="80"
//             width="80"
//             ariaLabel="blocks-loading"
//             colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//           />
//         </ContainerLoader>
//       )}
//       {error && <span>Whoops... Error! Please, reload this page!</span>}
//       <ContactList />
//     </Container>
//   );
// };

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedHeader } from './SharedHeader/SharedHeader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
