interface dto {
  _id: string;
  roleName: string;
}

const mapping = (data: any | any[]): dto | dto[] => {
  if (!data) {
    return [];
  }

  if (Array.isArray(data)) {
    const valueReturned: dto[] = data.map((it) => {
      return { _id: it._id, roleName: it.roleName };
    });

    return valueReturned;
  } else {
    const valueReturned: dto = {
      _id: data._id,
      roleName: data.roleName,
    };

    return valueReturned;
  }
};

export default mapping;
