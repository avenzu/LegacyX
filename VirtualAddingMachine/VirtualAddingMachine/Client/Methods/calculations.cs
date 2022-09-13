using System;

namespace VirtualAddingMachine.Client.Methods
{
    public class calculations
    {
        public double Addition(double num1, double num2)
        {
            return num1 + num2;
        }

        public double Subtraction(double num1, double num2)
        {
            return num1 - num2;
        }

        public double Multiplication(double num1, double num2)
        {
            return (num1 * num2);
        }

        public double Division(double num1, double num2)
        {
            return (num1 / num2);
        }

        public double Modulus(double num1, double num2)
        {
            return (num1 % num2);
        }

    }
}
