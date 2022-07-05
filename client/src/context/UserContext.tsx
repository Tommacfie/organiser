// import React, { ReactElement, useContext } from 'react';
// import useUser, { UserHookResult } from '../pages/main/hooks/useUser';

// const UserContext = React.createContext<UserHookResult>({
//   loading: true,
//   data: undefined,
// });

// export default UserContext;

// export const UserContextProvider = ({
//   children,
//   userID,
// }: {
//   children: ReactElement;
//   userID: string;
// }) => {
//   const value = useUser(userID);

//   return (
//     <UserContext.Provider value={value}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   return useContext(UserContext);
// };
export {};
