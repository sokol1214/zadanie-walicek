import math

def nww(a, b):
    return abs(a * b) // math.gcd(a, b)

print(nww(4, 6)) 