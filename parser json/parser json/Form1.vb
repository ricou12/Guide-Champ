Public Class Form1


    Dim jsonFile As String

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        OpenFileDialog1.Title = "DataBase json"
        OpenFileDialog1.ShowDialog()
        jsonFile = OpenFileDialog1.FileName
        Label2.Text = jsonFile
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        If My.Computer.FileSystem.FileExists(jsonFile) Then
            'Ouverture fichier json
            Dim myfile = My.Computer.FileSystem.OpenTextFieldParser(jsonFile)
            Dim iteration As Integer = 0
            Dim separatePath = "\"
            Dim ret = Chr(13) & Chr(10)
            Dim pathSortie = TextBox3.Text
            Dim stringSearch As String = TextBox1.Text
            Dim stringsplit As String = ""
            ' Défini un type d'encodage
            Dim utf8WithoutBom As New System.Text.UTF8Encoding(False, False)
            If TextBox1.Text <> "" Then
                While Not myfile.EndOfData
                    Dim chaine = myfile.ReadLine()
                    If chaine.Contains(stringSearch) = True Then
                        Dim extraire() = chaine.Split(":")
                        Dim ctn() As String = extraire(1).Split("""")
                        ' Contenu a ajouter dans le fichier md
                        Dim txtmd = "---" & ret & "layout: ficheTech" & ret & "number: " & iteration & ret & "---" & ret
                        'Cree un dossier a la racine de l'application
                        My.Computer.FileSystem.CreateDirectory(My.Application.Info.DirectoryPath & separatePath & pathSortie & separatePath)
                        ' Creer le fichier md
                        My.Computer.FileSystem.WriteAllText(My.Application.Info.DirectoryPath & separatePath & pathSortie & separatePath & ctn(1) & ".md", txtmd, False, utf8WithoutBom)
                        'Concatenation d'un message a renvoyer dans le textbox2
                        stringsplit += "Création du fichier n° " & iteration & " : " & ctn(1) & ".md" & ret & "content : " & txtmd & ret
                        Me.Refresh()
                        iteration += 1
                    End If
                End While
                TextBox2.Text = stringsplit
            Else
                MsgBox("Veuillez saisir un nom pour la clé recherché")
            End If
        End If
    End Sub
End Class
