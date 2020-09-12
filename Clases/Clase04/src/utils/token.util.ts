import * as randToken from 'rand-token';
import { UserDocument } from '../interfaces';
import moment from 'moment';
import jwt from 'jwt-simple';
import { mappingUserRoleDto } from '../dto';

export default class {
  static getRefreshToken() {
    const refreshToken = randToken.uid(256);
    return refreshToken;
  }

  static getAccessToken(user: UserDocument) {
    const payload = {
      iat: moment().unix(),
      exp: moment().add(10, 'minutes').unix(),
      _id: user._id,
      roles: mappingUserRoleDto(user.roles),
    };

    const accessToken = jwt.encode(payload, '3LP3rf@m@');

    return accessToken;
  }

  static async validateAccessToken(accessToken: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(accessToken, '3LP3rf@m@');
        resolve(payload);
      } catch (error) {
        if (error.message.toLowerCase() === 'token expired') {
          reject({
            status: 401,
            message: 'Token expired',
          });
        } else {
          reject({
            status: 409,
            message: 'Token inválido',
          });
        }
      }
    });

    await promise;

    return promise;
  }
}
