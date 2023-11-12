import { Student } from 'src/entities/student.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jubair',
  password: '111',
  entities: [Student],
  synchronize: true,
  schema: 'public',
};

export default ormConfig;
