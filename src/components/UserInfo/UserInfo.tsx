import React from 'react';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 className="name" data-cy="username">
      {user.name}
    </h2>
    <p data-cy="email">
      {`Email: ${user.email}`}
    </p>
  </>
);
