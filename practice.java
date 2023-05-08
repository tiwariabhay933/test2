/**
 * practice
 */
public class practice {
    public static void main(String[] args) {
        int length = 4;
        pattern(length);
    }
    public static void pattern(int length){
        int num = 1;
        for (int i = 1; i <= length; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println("");
        }
    }
}
