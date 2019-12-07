Public Class Form2

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim nbreRow As Integer = DataGridView1.RowCount
        For i As Integer = 0 To nbreRow - 1
            Dim cle As String = DataGridView1.Rows(i).Cells(0).Value
            Dim valeur As String = DataGridView1.Rows(i).Cells(1).Value
            MsgBox(cle & "  " & valeur)
            'Dim addContentJson As String = "," & vbCrLf & "{" & vbCrLf &}

        Next

    End Sub
End Class