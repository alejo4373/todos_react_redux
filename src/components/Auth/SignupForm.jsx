import React from 'react';

const SignupForm = ({
  username,
  password,
  email,
  handleChange,
  handleSubmit
}) => {
  return (
    <div>
      <h2> Sign-Up </h2>
      <form name="signup" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="user@example.com"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="***"
          onChange={handleChange}
        />
        <input type="submit" value="Sign-Up" />
      </form>
    </div>
  )
}

export default SignupForm;
