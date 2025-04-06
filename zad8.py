import math

def rozwiaz_kwadratowe(a, b, c):
    delta = b**2 - 4*a*c
    if delta < 0:
        return "Brak pierwiastków rzeczywistych"
    x1 = (-b - math.sqrt(delta)) / (2*a)
    x2 = (-b + math.sqrt(delta)) / (2*a)
    return x1, x2

print(rozwiaz_kwadratowe(1, -3, 2)) 
