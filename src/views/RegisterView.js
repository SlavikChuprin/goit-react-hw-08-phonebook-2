import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Loader from 'react-loader-spinner';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoadingData = useSelector(authSelectors.getLoading);
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      {isLoadingData ? (
        <Loader type="Circles" color="lightblue" />
      ) : (
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              autoFocus
              autoComplete="on"
              placeholder="введите имя"
              required
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              required
              placeholder="введите вашу почту"
              pattern="\S+@[a-z]+.[a-z]+"
              value={email}
              onChange={handleChange}
              autoComplete="on"
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="введите пароль от 7 до 12 символов"
              pattern="[A-Za-z0-9_]{7,12}"
              title="пароль состоит минимум из 7 знаков, максимум 12"
              onChange={handleChange}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </div>
  );
}
