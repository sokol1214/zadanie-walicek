def czy_doskonala(n):
    return sum(i for i in range(1, n) if n % i == 0) == n

print(czy_doskonala(28))  