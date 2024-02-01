import { Car } from "../Car.js";

class FlyingCar extends Car
{   canFly=true
    constructor(model,year,canFly)
    {
       super(model,year);
       this.canFly=canFly;
    }
toString()
{
    return `${super.toString()}, I can Fly.`
}
}
export {FlyingCar};
