def suma_szeregu(a, r, n):
    return a * (1 - r**n) // (1 - r)

print(suma_szeregu(2, 2, 4)) 
