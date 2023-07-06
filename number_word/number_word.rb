#
#	Write a function, #number_word, that converts a sentence to a list of numbers where each number represents
#	the position of the corresponding letter in the alphabet.
#
#	E.g.
#	  "cat" => "3 1 20"
#   "fad" => "6 1 4"
#


s1 = 'cat'
s2 = 'fad'
s3 = 'horse'

puts s1
puts number_word(s1)
puts
puts s2
puts number_word(s2)
puts
puts s3
puts number_word(s3)
puts

s4 = 'ChiCkEn'
puts s4
puts number_word(s4)



# FOLLOW UPS
#
# 1.
# Try this sentence:
# s4 = 'ChiCkEn'
# Does your solution still work?
#
# 2.
# Can you write the same function a different way?
#
# 3.
# Which of your two (or three?) functions is the most efficient and why?
#


# SOLUTIONS

def number_word(s)
  num_s  = ''.dup
  s.downcase.chars.each do |c|
      num_s << "#{c.ord - 96} "
  end

  num_s
end

def number_word(s)
  abc = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)
    num_s = ''.dup
  s.downcase.split('').each do |c|
    num_s << "#{abc.index(c) + 1} "
  end

  num_s
end

def number_word(s)
  abc = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
         o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}
  num_s = ''
  s.downcase.chars.map { |c| num_s << "#{abc[c.to_sym]} " }

  num_s
end


