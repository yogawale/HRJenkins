import path from 'path';
import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';
console.log(envName);

dotenv.config({
    path: path.join(__dirname, `${envName}.env`),
    override : true
});

export default
{
    BASE_URL : process.env.BASE_URL,
    USERNAME : process.env.USERNAME,
    PASSWORD : process.env.PASSWORD,
};