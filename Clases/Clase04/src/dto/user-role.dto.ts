interface dto {
  roleName: string;
}

const mapping = (data: any | any[]): dto | dto[] => {
  if (!data) {
    return [];
  }

  if (Array.isArray(data)) {
    const valueReturned: dto[] = data.map((it) => {
      return {
        roleName: it.roleName,
      };
    });

    return valueReturned;
  } else {
    const valueReturned: dto = {
      roleName: data.roleName,
    };

    return valueReturned;
  }
};

export default mapping;
