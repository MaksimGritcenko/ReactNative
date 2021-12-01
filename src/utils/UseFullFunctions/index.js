import { EMAIL_REGEX, PASSWORD_REGEX } from '../../components/Register/Register.config';

export function removeUniqId(str, uid) {
  return str.replace(`.${uid}`, '')
}

export function emailValidate(email) {
  return EMAIL_REGEX.test(email)
}

export function passwordValidate(password) {
  return PASSWORD_REGEX.test(password)
}