interface UserDto {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  photo?: string;
}

const mapping = (map: any | any[]): UserDto | UserDto[] => {
  if (!map) {
    return [];
  }

  if (Array.isArray(map)) {
    const valueReturned: UserDto[] = map.map((it) => {
      return {
        id: it.id,
        firstName: it.firstName,
        lastName: it.lastName,
        email: it.email,
        password: it.password,
        photo: it.photo,
      };
    });

    return valueReturned;
  }

  const valueReturned: UserDto = {
    id: map.id,
    firstName: map.firstName,
    lastName: map.lastName,
    email: map.email,
    password: map.password,
    photo: map.photo,
  };

  return valueReturned;
};

export default mapping;
