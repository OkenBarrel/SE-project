from django.contrib import admin
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User

# Register your models here.
from .models import Book,Teacher,Course,Mark,Usebook,UpScoreUserRelation,\
    DownScoreUserRelation,ValidationCode


class UsebookAdmin(admin.ModelAdmin):
    list_display = ('id', 'book', 'teacher', 'course','school_year','semester')
    readonly_fields = ('id',)



admin.site.register(Book)
admin.site.register(Teacher)
admin.site.register(Course)
# admin.site.register(User)
admin.site.register(Mark)
admin.site.register(Usebook,UsebookAdmin)
admin.site.register(Session)
admin.site.register(UpScoreUserRelation)
admin.site.register(DownScoreUserRelation)
admin.site.register(ValidationCode)

