import { mappingRoleGeneralDto } from '.';

interface dto {
  _id: string;
  name: string;
  email: string;
  roles: any;
}

const mapping = (data: any | any[]): dto | dto[] => {
  if (!data) {
    return [];
  }

  if (Array.isArray(data)) {
    const valueReturned: dto[] = data.map((it) => {
      return {
        _id: it._id,
        name: it.name,
        email: it.email,
        roles: mappingRoleGeneralDto(it.roles),
      };
    });

    return valueReturned;
  } else {
    const valueReturned: dto = {
      _id: data._id,
      name: data.name,
      email: data.email,
      roles: mappingRoleGeneralDto(data.roles),
    };

    return valueReturned;
  }
};

export default mapping;
