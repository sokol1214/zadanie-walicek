 def primes_in_range(start, end):
    return [n for n in range(start, end+1) if czy_pierwsza(n)]

print(primes_in_range(10, 30))  # przykład
