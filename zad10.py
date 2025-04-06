def czy_liczba_armstronga(n):
    digits = [int(d) for d in str(n)]
    return sum(d**len(digits) for d in digits) == n

print(czy_liczba_armstronga(153))  
