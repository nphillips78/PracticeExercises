def isLucky(n):
  n = str(n)
  first = n[0:len(n)/2]
  second = n[len(n)/2:]
  return sum(int(x) for x in first) == sum(int(x) for x in second)