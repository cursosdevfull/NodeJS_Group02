import request from 'supertest';
import 'reflect-metadata';
import app from '../../src/app';
import { DatabaseBootstrap } from '../../src/bootstrap';

const databaseBootstrap = new DatabaseBootstrap();

describe('user integration', () => {
  beforeAll(async () => {
    await databaseBootstrap.initialize();
  });

  afterAll(() => {
    databaseBootstrap.disconnect();
  });

  it('list users with token valid', async () => {
    const response: any = await request(app)
      .get('/users')
      .set(
        'Authorization',
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDA1NDA0MTAsImV4cCI6MTYwMDU0MjIxMCwiX2lkIjoiNWY1Y2U2NDVhMWE4ZjYwODQ0ZjJkMjRmIiwicm9sZXMiOlt7InJvbGVOYW1lIjoiQURNSU5JU1RSQVRPUiJ9XX0.troakLfzeZpNHiBU0ubCllzMxuv70qKbHH1ju-N9h3c'
      );

    expect(response.statusCode).toBe(200);
  });

  it('list users without token', async () => {
    const response: any = await request(app).get('/users');

    expect(response.statusCode).toBe(401);
  });

  it('list users with token invalid', async () => {
    const response: any = await request(app)
      .get('/users')
      .set('Authorization', 'Bearer ccccc');
    expect(response.statusCode).toBe(409);
  });
});
