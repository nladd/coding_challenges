def transpose(matrix_a)

    matrix_b = Array.new(a.first.length) { Array.new }
  
    matirx_a.each_with_index do |b, i|
        b.each_with_index do |n, j|
            matrix_b[j][i] = n
        end
    end
  
    matrix_b
end

def print_matrix(a)
    max_val_len = a.flatten.max.to_s.length
    a.each do |b|
        str = ''.dup
        b.each do |n|
            str << n.to_s.rjust(max_val_len+1, ' ')
        end
        puts str.strip
    end
end

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

b = [[1, 2, 3],
     [4, 5, 6]]

c = [[1,  2,  3,  4],
     [5,  6,  7,  8],
     [9, 10, 11, 12]]

puts "########### A #############"
print_matrix(a)
puts
print_matrix(transpose(a))
puts "########### B #############"
print_matrix(b)
puts
print_matrix(transpose(b))
puts "########### C #############"
print_matrix(c)
puts
print_matrix(transpose(c))
